var slash = ' # ';
var space = '  ';
var result = '';
var row = true;
for (var i1= 0; i1 < 8; i1++) {
  for (var i2 = 0; i2 < 8; i2++) {
    if ((i2+row) % 2 == 0) {
      result += space;
    } else {
      result += slash;
    }
  }
  console.log(result);
  result='';
  row = ! row;
}
   
console.log('\n\n');


for (let i = 1; i <= 100; i++) { 
    if(i%3==0)
    console.log("lol where is number?")
    else
    console.log(i)
  }


  console.log('\n\n');


  let a = "" + 1 + 0;//string type
  console.log(a);

  let b = "" - 1 + 0;//number type
  console.log(b);

  let c = true + false;//number type
  console.log(c);

  let d = 6 / "3";//number type
  console.log(d);

  let e = "2"*"3";//number type
  console.log(e);

  let f = 4 + 5 + "px";//string type
  console.log(f);

  let g = "$ + 4 + 5";//string type
  console.log(g);

  let h = "4" - 2;//number type
  console.log(h);

  let i = "4px" - 2;//number type
  console.log(i);

  let j = 7 / 0;//number type
  console.log(j);

  let k = "-9\n" + 5;//string type
  console.log(k);

  let l = "-9\n" - 5;//number type
  console.log(l);

  let m = 5 && 2;//number type
  console.log(m);

  let n = 2 && 5;//number type
  console.log(n);

  let o = 5||0;//number type
  console.log(o);

  let p = 0||5;//number type
  console.log(p);

  let q = null + 1 ;//number type
  console.log(q);

  let r = undefined + 1;//number type
  console.log(r);

  let s = null == "\n0\n";//boolean type
  console.log(s);

  let t = null == +"\n0\n";//boolean type
  console.log(t);
  