if (temp > 40) {
  return warmpoint >=45
}
if (temp > 60 && temp <40) {
  return warmpoint >=65
}
if (temp > 80 && temp <60) {
  return warmpoint >=85
}
if (temp > 100 && temp <80) {
  return warmpoint >=90
}
if (temp <=100) {
  return warmpoints <=90
}

if (sleleng === long && weight === heavy){
  set warmpoints = 40
}
if (sleleng === long && weight === mid){
  set warmpoints = 50
}
if (sleleng === long && weight === light){
  set warmpoints = 60
}
if (sleleng === short && weight === heavy){
  set warmpoints = 50
}
if (sleleng === short && weight === mid){
  set warmpoints = 70
}
if (sleleng === short && weight === light){
  set warmpoints = 90
}
if (sleleng === none && weight === heavy){
  set warmpoints = 70
}
if (sleleng === none && weight === mid){
  set warmpoints = 90
}
if (sleleng === none && weight === light){
  set warmpoints = 100
}
