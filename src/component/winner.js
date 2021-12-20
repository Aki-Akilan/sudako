import React from 'react'

function Winner(props) {
         console.log("winner");
         const {a,a1,a2,b,b1,b2,c,c1,c2,d,d1,d2,aa,aa1,aa2,bb,bb1,bb2,cc,cc1,cc2,dd,dd1,dd2,e,e1,e2,f,f1,f2,ee,ee1,ee2,ff,ff1,ff2,swin}=props

         // console.log("a"+a+"a1"+a1+"a2"+a2+"aa"+aa+"aa1"+aa1+"aa2"+aa2+"b"+b+"b1"+b1+"b2"+b2+"bb"+bb+"bb1"+bb1+"bb2"+bb2+"c"+c+"c1"+c1+"c2"+c2+"cc"+cc+"cc1"+cc1+"cc2"+cc2+"d"+d+"d1"+d1+"d2"+d2+"dd"+dd+"dd1"+dd1+"dd2"+dd2+"e"+e+"e1"+e1+"e2"+e2+"ee"+ee+"ee1"+ee1+"ee2"+ee2+"f"+f+"f1"+f1+"f2"+f2+"ff"+ff+"ff1"+ff1+"ff2"+f2);
                  
         if(a>0&&a1>0&&a2>0&&aa>0&&aa1>0&&aa2>0&&b>0&&b1>0&&b2>0&&bb>0&&bb>0&&bb1>0&&bb2>0&&c>0&&c1>0&&c2>0&&cc>0&&cc1>0&&cc2>0&&d>0&&d1>0&&d2>0&&dd>0&&dd1>0&&dd2>0&&e>0&&e1>0&&e2>0&&ee>0&&ee1>0&&ee2>0&&f>0&&f1>0&&f2>0&&ff>0&&ff1>0&&ff2>0)

         {
                  if((a!==a1&&a!==a2&&a!==aa&&a!==aa1&&a!==aa2&&a!==b&&a!==b1&&a!==b2&&a!==c&&a!==cc&&a!==e&&a!==ee)&&(a1!==a&&a1!==a2&&a1!==aa&&a1!==aa1&&a1!==aa2&&a1!==b&&a1!==b1&&a1!==b2&&a1!==c1&&a1!==cc1&&a1!==e1&&a1!==ee1)&&(a2!==a&&a2!==a1&&a2!==aa&&a2!==aa1&&a2!==aa2&&a2!==b&&a2!==b1&&a2!==b2&&a2!==c2&&a2!==cc2&&a2!==e2&&a2!==ee2)&&(aa!==a&&aa!==a1&&aa!==a2&&aa!==aa1&&aa!==aa2&&aa!==bb&&aa!==bb1&&aa!==bb2&&aa!==c&&aa!==cc&&aa!==e&&aa!==ee)&&(aa1!==a&&aa1!==a1&&aa1!==a2&&aa1!==aa&&aa1!==aa2&&aa1!==bb&&aa1!==bb1&&aa1!==bb2&&aa1!==c1&&aa1!==cc1&&aa1!==e1&&aa1!==ee1)&&(aa2!==a&&aa2!==a1&&aa2!==a2&&aa2!==aa&&aa2!==aa1&&aa2!==bb&&aa2!==bb1&&aa2!==bb2&&aa2!==c2&&aa2!==cc2&&aa2!==e2&&aa2!==ee2)&&(b!==b1&&b!==b2&&b!==bb&&b!==bb1&&b!==bb2&&b!==a2&&b!==a1&&b!==a&&b!==d&&b!==dd&&b!==f&&b!==ff)&&(b1!==b&&b1!==b2&&b1!==bb&&b1!==bb1&&b1!==bb2&&b1!==a2&&b1!==a1&&b1!==a&&b1!==d1&&b1!==dd1&&b1!==f1&&b1!==ff1)&&(b2!==b&&b2!==b1&&b2!==bb&&b2!==bb1&&b2!==bb2&&b2!==a2&&b2!==a1&&b2!==a&&b2!==d2&&b2!==dd2&&b2!==f2&&b2!==ff2)&&(bb!==b&&bb!==b1&&bb!==b2&&bb!==bb1&&bb!==bb2&&bb!==aa2&&bb!==aa1&&bb!==aa&&bb!==d&&bb!==dd&&bb!==f&&bb!==ff)&&(bb1!==b&&bb1!==b1&&bb1!==b2&&bb1!==bb&&bb1!==bb2&&bb1!==aa2&&bb1!==aa1&&bb1!==aa&&bb1!==d1&&bb1!==dd1&&bb1!==f1&&bb1!==ff1)&&(bb2!==b&&bb2!==b1&&bb2!==b2&&bb2!==bb&&bb2!==bb1&&bb2!==aa2&&bb2!==aa1&&bb2!==aa&&bb2!==d2&&bb2!==dd2&&bb2!==f2&&bb2!==ff2)&&(c!=c1&&c!==c2&&c!==cc&&c!==cc1&&c!==cc2&&c!==d&&c!==d1&&c!==d2&&c!==aa&&c!=a&&c!==e&&c!==ee&c!==cc)&&(c1!==c&&c1!==c2&&c1!==cc&&c1!==cc1&&c1!==cc2&&c1!==d&&c1!==d1&&c1!==d2&&c1!==aa1&&c1!==a1&&c1!==e1&&c1!==ee1)&&(c2!==c&&c2!==c1&&c2!==cc&&c2!==cc1&&c2!=cc2&&c2!=d&&c2!==d1&&c2!==d2&&c2!==aa2&&c2!==a2&&c2!==e2&&c2!==ee2)&&(cc!==c&&cc!==c1&&cc!==c2&&cc!==cc1&&cc!==cc2&&cc!==dd&&cc!==dd1&&cc!==dd2&&cc!==aa&&cc!==a&&cc!==e&&cc!==ee)&&(cc1!==c&&cc1!==c1&&cc1!==c2&&cc1!==cc&&cc1!==cc2&&cc1!==dd&&cc1!==dd1&&cc1!==dd2&&cc1!==aa1&&cc1!==a1&&cc1!==e1&&cc1!==ee1)&&(cc2!==c&&cc2!==c1&&cc2!==c2&&cc2!==cc&&cc2!==cc1&&cc2!==dd&&cc2!==dd1&&cc2!==dd2&&cc2!==aa2&&cc2!==a2&&cc2!==e2&&cc2!==ee2)&&(d!==d1&&d!==d2&&d!==dd&&d!==dd1&&d!==dd2&&d!==c2&&d!==c1&&d!==c&&d!==bb&&d!==b&&d!==f&&d!==ff)&&(d1!==d&&d1!==d2&&d1!==dd&&d1!==dd1&&d1!==dd2&&d1!==c2&&d1!==c1&&d1!==c&&d1!==bb1&&d1!==b1&&d1!==f1&&d1!==ff1)&&(d2!=d&&d2!==d1&&d2!==dd&&d2!==dd1&&d2!==dd2&&d2!==c2&&d2!==c1&&d2!==c&&d2!==bb2&&d2!==b2&&d2!=f2&&d2!==ff2)&&(dd!=d&&dd!==d1&&dd!==d2&&dd!==dd1&&dd!==dd2&&dd!=cc2&&dd!==cc1&&dd!==cc&&dd!==bb&&dd!==b&&dd!==f&&dd!==ff)&&(dd1!==d&&dd1!==d1&&dd1!==d2&&dd1!==dd&&dd1!==dd2&&dd1!==cc2&&dd1!==cc1&&dd1!==cc&&dd1!==bb1&&dd1!==b1&&dd1!==f1&&dd1!==ff1)&&(dd2!==d&&dd2!==d1&&dd2!==d2&&dd2!==dd&&dd2!=dd1&&dd2!=cc2&&dd2!==cc1&&dd2!==cc&&dd2!==bb2&&dd2!==b2&&dd2!=f2&&dd2!==ff2)&&(e!==e1&&e!==e2&&e!==ee&&e!==ee1&&e!==ee2&&e!==f&&e!==f1&&e!==f2&&e!==aa&&e!==a&&e!==c&&e!==cc)&&(e1!==e&&e1!==e2&&e1!==ee&&e1!==ee1&&e1!==ee2&&e1!==f&&e1!==f1&&e1!==f2&&e1!==aa1&&e1!==a1&&e1!==c1&&e1!==cc1)&&(e2!==e&&e2!==e1&&e2!==ee&&e2!==ee1&&e2!==ee2&&e2!==f&&e2!==f1&&e2!==f2&&e2!==aa2&&e2!==a2&&e2!==c2&&e2!==cc2)&&(ee!=e&&ee!==e1&&ee!==e2&&ee!==ee1&&ee!==ee2&&ee!==ff&&ee!=ff1&&ee!==ff2&&ee!==aa&&ee!==a&&ee!==c&&ee!==cc)&&(ee1!==e&&ee1!==e1&&ee1!==e2&&ee1!==ee&&ee1!==ee2&&ee1!==ff&&ee1!==ff1&&ee1!==ff2&&ee1!==aa1&&ee1!==a1&&ee1!==c1&&ee1!==cc1)&&(ee2!==e&&ee2!==e1&&ee2!==e2&&ee2!==ee&&ee2!==ee1&&ee2!==ff&&ee2!==ff1&&ee2!==ff2&&ee2!==aa2&&ee2!==a2&&ee2!==c2&&ee2!==cc2)&&(f!==f1&&f!==f2&&f!==ff&&f!==ff1&&f!=ff2&&f!==e2&&f!==e1&&f!==e&&f!==bb&&f!==b&&f!=d&&f!==dd)&&(f1!==f&&f1!==f2&&f1!==ff&&f1!=ff1&&f1!==ff2&&f1!==e2&&f1!==e1&&f1!=e&&f1!==bb1&&f1!==b1&&f1!==d1&&f1!==dd1)&&(f2!==f&&f2!==f1&&f2!==ff&&f2!==ff1&&f2!==ff2&&f2!==e2&&f2!==e1&&f2!==e&&f2!==bb2&&f2!==b2&&f2!==d2&&f2!==dd2)&&(ff!==f&&ff!==f1&&ff!==f2&&ff!==f1&&ff!==ff2&&ff!==ee2&&ff!==ee1&&ff!==ee&&ff!==bb&&ff!==b&&ff!==d&&ff!==dd)&&(ff1!==f&&ff1!==f1&&ff1!==f2&&ff1!==ff&&ff1!==ff2&&ff1!==ee2&&ff1!==ee1&&ff1!==ee&&ff1!==bb1&&ff1!==b1&&ff1!==d1&&ff1!==dd1)&&(ff2!==f&&ff2!==f1&&ff2!==f2&&ff2!==ff&&ff2!==ff1&&ff2!==ee2&&ff2!==ee1&&ff2!==ee&&ff2!==bb2&&ff2!==b2&&ff2!==d2&&ff2!==dd2))
                  {
                                    console.log("wow you won the game");
                                    swin("You Won the Game");           
                  }
                  else
                  {
                           console.log("oops.. you lose better luck next time");
                           swin("You Loss the Game");           
                           
                  }
         }

         return (
                  <div>

                  </div>
         )
}


export default Winner





