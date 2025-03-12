from django.urls import path
from . import views

urlpatterns=[
    path('api/login/',views.Login,name="Login"),
    path('api/register/',views.Register,name='Register'),
    path('api/session_status/',views.session_status,name="Session"),
]


