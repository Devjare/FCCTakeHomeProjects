from requests import get

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class GetWeather(APIView):
    def get(self, request, format=None):
        latitude = request.GET.get("latitude")
        longitude = request.GET.get("longitude")
        print(f"Latitude: {latitude}") 
        print(f"Longitude: {longitude}") 
        url = "https://weather-proxy.freecodecamp.rocks/api/current?lat={lat}&lon={lon}"
        response = get(url.format(lat=latitude, lon=longitude))

        return Response(response.json(),
                        status=status.HTTP_200_OK)
