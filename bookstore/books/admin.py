from django.contrib import admin
from .models import Book, Transaction, Cart

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'price', 'stock', 'img_url')
    search_fields = ('title', 'author')
    list_filter = ('author',)

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('book', 'transaction_type', 'quantity', 'created_at')
    search_fields = ('book__title', 'transaction_type')
    list_filter = ('transaction_type', 'created_at')

@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ('book', 'quantity', 'added_on')
    search_fields = ('book__title',)
    list_filter = ('added_on',)
