class Vector2Int
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }
  
  add(other)
  {
    return new Vector2Int(x + other.x, y + other.y);
  }
  
  sub(other)
  {
    return new Vector2Int(x - other.x, y - other.y);
  }
  
  div(other)
  {
    return new Vector2Int(x / other, y / other);
  }
  
  mult(other)
  {
    return new Vector2Int(x * other, y * other);
  }
  
  toPVector()
  {
    return createVector(this.x, this.y);
  }
}