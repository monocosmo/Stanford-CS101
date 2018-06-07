image = new SimpleImage("stop.jpg")
back = new SimpleImage("leaves.jpg")

for (pixel: image){
  avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
  if (pixel.getRed()) > avg*1.5{  
    //1.5 is adjustable.
    x = pixel.getX();
    y = pixel.getY();
    pixel2 = back.getPixel(x,y);
    pixel.setRed(pixel2.getRed());
    pixel.setGreen(pixel2.getGreen());
    pixel.setBlue(pixel2.getBlue());
  }
}

print(image);
