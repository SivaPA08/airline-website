from django.shortcuts import render
from django.http import JsonResponse
from django.db import connection
import json
from django.views.decorators.csrf import csrf_exempt
import sqlite3


@csrf_exempt
def Login(request):
    if request.method=="POST":
        try:
            data=json.loads(request.body)
            email=data.get('email')
            password=data.get('password')

            if not email or not password:
                return JsonResponse({'message':'Invalid Input'})
            
            with connection.cursor() as cursor:
                q="SELECT * FROM USER WHERE EMAIL=%s AND PASSWORD=%s"
                cursor.execute(q,[email,password])
                found=cursor.fetchone()
                if found:
                    return JsonResponse({'message':'Login in Successful'})
                else:
                    return JsonResponse({'message':'User not exist please Register'})
            

        except json.JSONDecodeError:
            return JsonResponse({'message':'Invalid Json'})
        except Exception as e:
            return JsonResponse({'message':'Error'})


@csrf_exempt
def Register(request):
    if(request.method=='POST'):
        try:
            data=json.loads(request.body)
            fullname=data.get('fullname')
            email=data.get('email')
            password=data.get('password')

            with connection.cursor() as cursor:
                q='INSERT INTO USER (FULLNAME,EMAIL,PASSWORD) VALUES (%s,%s,%s)'
                try:
                    cursor.execute(q,[fullname,email,password])
                    return JsonResponse({'message':'Successfully Registered Please Login'})
                except sqlite3.IntegrityError:
                    return JsonResponse({'message':'User Already Exist'})
        except json.JSONDecodeError:
            return JsonResponse({'message':'Invalid Json'})
        except Exception as e:
            return JsonResponse({'message':'Error'})

