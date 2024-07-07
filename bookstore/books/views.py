from rest_framework import viewsets
from .models import Book, Transaction, Cart
from .serializers import BookSerializer, TransactionSerializer, CartSerializer
import logging

logger = logging.getLogger(__name__)

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class CreditTransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.filter(transaction_type='credit')
    serializer_class = TransactionSerializer

class CashTransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.filter(transaction_type='cash')
    serializer_class = TransactionSerializer
    def list(self, request, *args, **kwargs):
        logger.info('Request data: %s', request.data)
        return super().list(request, *args, **kwargs)