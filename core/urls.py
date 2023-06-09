from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)


urlpatterns = [
   path('auth/', include('djoser.urls')),
   path('auth/', include('djoser.urls.jwt')),
   path('admin/', admin.site.urls),
   # path('api/pdf/operations/', include('apps.pdf_data_processing.urls')),
   path('api/blog/', include('apps.blog.urls')),
   path('api/category/', include('apps.category.urls')),
   
   re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += [ re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]


