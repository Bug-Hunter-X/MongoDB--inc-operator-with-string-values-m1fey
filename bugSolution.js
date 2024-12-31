```javascript
// Correct usage of $inc operator
db.collection.updateMany({"field": "value"}, {"$inc": {"field": 1}});
```