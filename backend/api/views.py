from django.shortcuts import render
from django.http import JsonResponse
from django.db import connection
import json
from django.views.decorators.csrf import csrf_exempt
import sqlite3


@csrf_exempt
def Login(request):
    if(request=='POST'):
        #logic for login
        pass
    pass


@csrf_exempt
def Register(request):
    if(request=='POST'):
        #logic for register
        pass
    pass


