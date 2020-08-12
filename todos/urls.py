from rest_framework import routers
from .viewsets import TodoViewSet

router = routers.DefaultRouter()
router.register("api/todos", TodoViewSet, basename="some name")

urlpatterns = router.urls
