```javascript
// Incorrect usage of $inc operator
db.collection.updateMany({"field": "value"}, {"$inc": {"field": "value"}});
```