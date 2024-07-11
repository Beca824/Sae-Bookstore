from django.db import models
from django.utils.timezone import now

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    img_url = models.CharField(max_length=500, default="https://www.pinterest.com/")  # URL as a string
    genre = models.CharField(max_length=100, default="Python")

    def __str__(self):
        return self.title

class Transaction(models.Model):
    TRANSACTION_TYPES = [
        ('credit', 'Credit'),
        ('cash', 'Cash'),
    ]
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    transaction_type = models.CharField(max_length=6, choices=TRANSACTION_TYPES)
    quantity = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.transaction_type} - {self.book.title}"

class Cart(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    added_on = models.DateTimeField(default=now)

    def __str__(self):
        return f"{self.book.title} - {self.quantity}"
