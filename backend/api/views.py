import json
import sqlite3
import jwt
from datetime import datetime, timedelta
from django.http import JsonResponse
from django.db import connection
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings  # Ensure settings.SECRET_KEY is defined

@csrf_exempt
def Login(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            if not email or not password:
                return JsonResponse({'message': 'Invalid Input'})
            
            with connection.cursor() as cursor:
                q = "SELECT EMAIL FROM USER WHERE EMAIL=%s AND PASSWORD=%s"
                cursor.execute(q, [email, password])
                found = cursor.fetchone()
                if found:
                    user_email = found[0]
                    # Create payload with email, issued at, and expiration (1 day)
                    payload = {
                        'email': user_email,
                        'iat': datetime.utcnow(),
                        'exp': datetime.utcnow() + timedelta(days=1)
                    }
                    token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
                    return JsonResponse({'message': 'Login Successful', 'success': True, 'token': token})
                else:
                    return JsonResponse({'message': 'User does not exist, please register', 'success': False})
            
        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON'})
        except Exception as e:
            return JsonResponse({'message': 'Error', 'error': str(e)})
    else:
        return JsonResponse({'message': 'Method not allowed'}, status=405)


@csrf_exempt
def Register(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            fullname = data.get('fullname')
            email = data.get('email')
            password = data.get('password')

            with connection.cursor() as cursor:
                q = 'INSERT INTO USER (FULLNAME, EMAIL, PASSWORD) VALUES (%s, %s, %s)'
                try:
                    cursor.execute(q, [fullname, email, password])
                    return JsonResponse({'message': 'Successfully Registered. Please Login'})
                except sqlite3.IntegrityError:
                    return JsonResponse({'message': 'User Already Exists'})
        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON'})
        except Exception as e:
            return JsonResponse({'message': 'Error', 'error': str(e)})
    else:
        return JsonResponse({'message': 'Method not allowed'}, status=405)


def session_status(request):
    """
    Verify the JWT token passed in the Authorization header.
    The header should be: "Bearer <token>".
    """
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return JsonResponse({'authenticated': False})
    
    try:
        token = auth_header.split(' ')[1]
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        return JsonResponse({'authenticated': True, 'email': payload.get('email')})
    except jwt.ExpiredSignatureError:
        return JsonResponse({'authenticated': False, 'message': 'Token expired'})
    except jwt.InvalidTokenError:
        return JsonResponse({'authenticated': False, 'message': 'Invalid token'})


@csrf_exempt
def Logout(request):
    """
    With JWT, logout is handled on the client side by discarding the token.
    This endpoint is optional.
    """
    return JsonResponse({'message': 'Logout endpoint: Discard token on client side'})
