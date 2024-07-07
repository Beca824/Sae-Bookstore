from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, TransactionViewSet, CartViewSet, CreditTransactionViewSet, CashTransactionViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet)
router.register(r'transactions', TransactionViewSet)
router.register(r'cart', CartViewSet)
router.register(r'credit-transactions', CreditTransactionViewSet, basename='credit-transaction')
router.register(r'cash-transactions', CashTransactionViewSet, basename='cash-transaction')

urlpatterns = [
    path('', include(router.urls)),
]
