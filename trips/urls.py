from django.urls import path
from .views import TripView

app_name = 'trips'  # Set the app namespace

urlpatterns = [
    path('', TripView.as_view({'get': 'list'}), name='trip_list'),  # Define the trip list route
    path('<uuid:trip_id>/', TripView.as_view({'get': 'retrieve'}), name='trip_detail'),  # new
]
