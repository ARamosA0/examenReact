from django.urls import path

from . import views

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('postulante/', views.PostulanteView.as_view(), name='postulante'),
    path('postulante/<int:id>', views.PostulanteDetail.as_view())
]