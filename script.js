var pix;
var imgcanvas;
var fileinput;
var img;
var ctx=imgcanvas.getContext("2d");

function upload()
{
  imgcanvas=document.getElementById("can");
  fileinput=document.getElementById("finput");
  img=new SimpleImage(fileinput);
  img.drawTo(imgcanvas);
}
function goGray()
{
 if(isloaded(img))
   {
      for(pix of img.values())
    {
 var avg=(pix.getRed()+pix.getGreen()+pix.getBlue())/3;
    pix.setRed(avg);
    pix.setGreen(avg);
    pix.setBlue(avg);
    }
img.drawTo(imgcanvas);
   }
}
function goRed()
{
if(isloaded(img))
  {
      for(pix of img.values())
{
    var avg=(pix.getRed()+pix.getBlue()+pix.getGreen())/3;
    if(avg<128)
    {
        pix.setRed(2*avg);
        pix.setBlue(0); pix.setGreen(0);
    }
    else
    {
        pix.setRed(255);
        pix.setBlue(2*avg-255); pix.setGreen(2*avg-255);
    }
}
img.drawTo(imgcanvas);
  }
}
function goBlue()
{
 if(isloaded(img))
   {
      for(pix of img.values())
    {
      pix.setBlue(255);
    }
img.drawTo(imgcanvas);
   }
}

function reset()
{
 upload();
}

function isloaded(image)
{
if(image==null || !image.complete())
  {
    alert("Image not loaded");
    return false;
  }
else
  {
    return true;
  }
}

function gowindow()
{ var wmid=img.getWidth()/2;
  var hmid=img.getHeight()/2;

 if(isloaded(img))
    {
      for(pix of img.values())
     {
    if(pix.getX()<=10 || pix.getX()>=(img.getWidth()-10))
    {
          setblack(pix);
    }
else if(pix.getY()<=10 || pix.getY()>=(img.getHeight()-10))
{
    setblack(pix);
}
else if(pix.getX()>=(wmid-5) && pix.getX()<=(wmid+5))
{
    setblack(pix);
}
else if(pix.getY()>=(hmid-5) && pix.getY()<=(hmid+5))
{
    setblack(pix);
}
    
}
}
img.drawTo(imgcanvas);
}
function setblack(pix)
{
 pix.setRed(0); pix.setBlue(0);pix.setGreen(0);
}
function rainbow()
{
  var h=img.getHeight();
  var d=h/7;
  for(pix of img.values())
  {
    var y=pix.getY();
    if(y<=d);
    {
      pix.setRed(255);
    }
    
    if(y>d && y<=(2*d))
    {
      pix.setRed(255);
      pix.setGreen(165);
    }

    if(y>(2*d) && y<=(3*d))
    {
      pix.setRed(255);
      pix.setGreen(255);
    }

    if(y>(3*d) && y<=(4*d))
    {
      pix.setGreen(255);
    }

    if(y>(4*d) && y<=(5*d))
    {
      pix.setBlue(255);
    }

    if(y>(5*d) && y<=(h-d))
    { 
      pix.setRed(75); pix.setBlue(130);

    }

    if(y>(h-d) && y<=h)
    {
      pix.setRed(148); pix.setBlue(211);
    }

  }
img.drawTo(imgcanvas);
}