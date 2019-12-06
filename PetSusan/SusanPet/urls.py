from django.urls import path,include
from .api import Province_cityList,RegisterAPI,LoginAPI,contact_list,contact_detail,item_list,item_detail,UserAPI,categori_loai_list,category_loai_detail,categori_loai_list,ratelist,rate_detail
from .api import District_List,CommuneList,profile_list,RepAPI


urlpatterns = [
    path('city/',Province_cityList),
    path('huyen/',District_List),
    path('xa/',CommuneList),
    path('contact/',contact_list),
    path('contact/<int:pk>',contact_detail),
    path('rate/',ratelist),
    path('rate/<int:pk>',rate_detail),
    path('categori_loai/',categori_loai_list),
    path('categori_loai/<int:pk>',category_loai_detail),
    path('categori_giong/',categori_loai_list),
    path('categori_giong/<int:pk>',category_loai_detail),
    path('item/',item_list),
    path('Rep/',RepAPI.as_view()),
    path('auth/register/', RegisterAPI.as_view()),
    path('auth/login/',LoginAPI.as_view()),
    path('auth/profile/',profile_list),
    path('auth/user/', UserAPI.as_view()),
    path('auth/', include('knox.urls')),
]