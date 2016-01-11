long readval;
long readvalblue;

unsigned long timechange = 0;
unsigned long previoustimechange = 0;

unsigned long timechangeblue = 0;
unsigned long previoustimechangeblue = 0;

unsigned long deltanumber = 0;
unsigned long deltanumberblue = 0;

int cptnb = 0;
int previouscpt = 0;
int numberdial = 0;

int startNumberRelease = 0;

int iszerozone = 0;

boolean isLastNb = true;



boolean isAZeroZone = false;
boolean isComposingNumFinished = false;


void setup() {
  // put your setup code here, to run once:
 Serial.begin(9600);
 Serial.println("hello");

  pinMode(2, INPUT);
  attachInterrupt(digitalPinToInterrupt(2), change, CHANGE) ;

  pinMode(3, INPUT);
  attachInterrupt(digitalPinToInterrupt(3), changeBlue, CHANGE) ;

 
 
}

void loop() {
  /*Serial.print("CPT");
 Serial.println(cptnb);
 Serial.print("PREVIOUS");
 Serial.println(numberdial);*/
 //Serial.println(digitalRead(2));
 
 
 /*if(numberdial == cptnb && cptnb != 0) {

  Serial.println(cptnb);
 }
 

 
numberdial = cptnb;
 delay(100);*/
 

}

void change()
{
  readval = digitalRead(2);
  //Serial.print("Readval red");
  //Serial.println(readval);

  if(readval == 0 && isAZeroZone == false) {
    cptnb += 1;
    isAZeroZone = true;
  }

  if(readval == 1) {
    isAZeroZone = false;
  }

  Serial.println(cptnb);


  /*if(timechange - previoustimechange >= 500) {
    Serial.println("nouveau num compose");
  }*/

  //Serial.println(readval);

  


  /*timechange = millis();


  deltanumber = timechange - previoustimechange;
  //Serial.println(deltanumber);


  if(deltanumber >= 100) {
    Serial.println("nouveau num compose");
    //Serial.println(cptnb);
    cptnb = 0;
    isLastNb = true;
  }
  
  
  previoustimechange = timechange;
  //Serial.println(timechange);
  //Serial.println(previoustimechange);
  
  if(readval == 0 && iszerozone == 0) {
    
    cptnb += 1;
    iszerozone = 1;
    
    
  }

  if(readval == 1) {
    iszerozone = 0;
    
  }


  //Serial.println(cptnb);
*/

  
 
}

void changeBlue()
{
  readvalblue = digitalRead(3);

  //Serial.println("changement bleu");
  
  //Serial.println(cptnb);
  //Serial.println(readvalblue);

 
  

  delay(100);

  

  //Serial.println(readvalblue);

  /*if(readvalblue == 1) {
    Serial.println("FIN ");

    Serial.println(cptnb);
  }*/

  if(readvalblue == 1) {
    Serial.println("FIN ");
    //Serial.println(cptnb);
    
    cptnb = 0;
  }
  

  
  
  
  
  //Serial.print("readval Blue");
  //Serial.println(readvalblue);

 /* timechangeblue = millis();

  deltanumberblue = timechangeblue - previoustimechangeblue;  
  //Serial.println(deltanumberblue);

  previoustimechangeblue = timechangeblue;
*/


 
}

