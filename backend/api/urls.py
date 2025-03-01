from django.urls import path
from . import views

urlpatterns=[
    path('api/login/',views.Login,name="Login"),
    path('api/register/',views.Register,name='Register'),
]