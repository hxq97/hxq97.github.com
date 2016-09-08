$(function(){
			var $key=0;/*控制屏滚动数的变量*/
			$('.jinggao').height($(window).height());
			$('#box').height($(window).height());
			$(window).resize(function(){
				$('.jinggao').height($(window).height());
				$('#box').height($(window).height());
				$('.circle').css('top',$(window).height()/2-$(".circle").height()/2);
			});
			$('.circle').css("top",$(window).height()/2-$(".circle").height()/2);
			$('.circle ul li').click(function(event) {
				$key=$(this).index();
				$('#box').attr('class','go'+$key+'');
				$('.circle ul li').eq($key).addClass('current').siblings().removeClass('current');
				indexHuan();
				serviceHuan();
				workHuan();
				aboutHuan();
				contactHuan();
			});
			$('.jinggao span').click(function(e){
				
				$('.jinggao').stop().fadeOut();	
				$('.one .logo').stop().animate({'top':'50%','margin-top':'-230px'},2000,"tantiao");
				$('audio').get(0).pause();

			});
			function good(delta){
			  $key=$key-delta;
				if($key<0)
				{
					$key=0;
				}else if($key>4)
				{
					$key=4;
				}
				$('#box').attr("class","go"+$key+"");
				/*滑动小点跟着一起走*/
				$('.circle ul li').eq($key).addClass('current').siblings().removeClass('current');
				indexHuan();
				serviceHuan();
				workHuan();
				aboutHuan();
				contactHuan();
			}

			var timer=null;/*防止滑动多次，设置定时器的做法*/
			$(document).mousewheel(function(event,delta){
               clearTimeout(timer); /*设表先关*/
               timer=setTimeout(function(){
               		good(delta);/*函数调用*/ 
               },150);
			});
			//logo展示效果加工
			function indexHuan(){
				if($key==0){
					$('.one .logo').stop().animate({'top':'50%','margin-top':'-230px'},2000,"tantiao");
				}else{
					$('.one .logo').stop().animate({'top':'-460px','margin-top':'0'},2000);
				}
			};
			
			
			//关于我们设置
			function aboutHuan(){
				if($key==1)
				{	
					$('.two .about_title').stop().delay(800).animate({'left':'0'},500);
					$('.two .about_bg').stop().delay(500).animate({'left':'0'},800);
					$('.two .about').stop().delay(500).animate({'right':'0'},1000,"tantiao");
							
				}
				else
				{
					$('.two .about_title').stop().animate({'left':'-150px'},500);
					$('.two .about_bg').stop().animate({'left':'-100%'},800);
					$('.two .about').stop().animate({'right':'-100%'},800);
				}
			}
			//启动about定时器
			$('.two .about ul li').eq(1).css({'left':'261px'});
			$('.two .about ul li').eq(2).css({'left':'510px'});
			$('.two .about ul li').eq(3).css({'left':'759px'});
			
			var about_num = 0;
			var myAbout = null;
			$('.two .about ul li').mouseenter(function(e){
				var myThis = $(this).index();
				myAbout = setInterval(function(){
					about_num++;
					if(about_num > 4){
						about_num = 0;
					}
					var aboutMover = -200 * about_num;
					$('.two .about ul li').eq(myThis).children('img').stop().animate({'top':''+aboutMover+'px'},300);		
				},800);
			}).mouseleave(function(){
					clearInterval(myAbout);
					about_num = 0;
					$(this).children('img').stop().animate({'top':'0'},300);	
			});
			
			
			
			//案例部分展示图片切换效果
			function workHuan(){
				if($key == 2){
					$('.work_top').stop().delay(500).animate({'top':'-20px'},2500,"tantiao");
					$('.anli_box').stop().delay(500).animate({'left':'50%','margin-left':'-500px'},1000);
					$('.work_nav').stop().delay(1000).animate({'top':'50%','margin-top':'-150px'},2000,"tantiao");

				}else{
					$('.work_nav').stop().animate({'top':'-300px'},1000);
					$('.work_top').stop().animate({'top':'-180px'},2000);
					$('.anli_box').stop().animate({'left':'-1000px','margin-top':'0'},1000);
				}
			}
			$('.anli ul').append($('.anli ul li:first').clone(true));
			var work_num = 0;
			var work_xuan = 0;
			var workTime = null;
			var myworkTimer = function(){
				work_xuan++;
				if(work_xuan > 3){
					work_xuan = 0;
					$('.work_nav span').css({'top':'2px'});
				}
				work_num++;
				if( work_num > 4){
					work_num = 1;
					$('.anli_box .anli ul').css({'top':'0px'});
				}
				var navMover = work_xuan * 60 + 25;
				var mover = -work_num * 320;
				$('.anli_box .anli ul').stop().animate({'top': ''+mover+'px'},1000,"tantiao");	
				$('.work_nav span').stop().animate({'top':''+navMover+'px'},2000);
			};
			workTime = setInterval(myworkTimer,3000);
			$('.work_nav ol li').click(function(e){
				work_xuan = $(this).index();
				work_num = $(this).index();
				var navMover = work_xuan * 60 + 25;
				var mover = -work_num * 320;
				$('.anli_box .anli ul').stop().animate({'top': ''+mover+'px'},1000,"tantiao");	
				$('.work_nav span').stop().animate({'top':''+navMover+'px'},500);
			});
			$('.work_nav ol li').hover(function(e){
				clearInterval(workTime);
			},function(){
				clearInterval(workTime);
				workTime = setInterval(myworkTimer,3000);
			});
			$('.anli_box .anli ul li a').hover(function(e){
				clearInterval(workTime);
				$(this).children('span').stop().animate({'bottom':'0'},300);
				$(this).siblings().children('img').stop().animate({'opacity':'0.3'},500);	
			},function(){
				$(this).children('span').stop().animate({'bottom':'-38px'},300);
				$(this).siblings().children('img').stop().animate({'opacity':'1'},500);	
				clearInterval(workTime);
				workTime = setInterval(myworkTimer,3000);
			});
			//服务模块设置
			function serviceHuan(){
				if($key==3){
					$('.box_four .first_box').stop().animate({'left':'0'},1000);
					$('.box_four .banner_box').stop().animate({'right':'0px'},1000);
					$(".zhuan").addClass('zhenzhuan');	
				}else{
					$('.box_four .first_box').stop().animate({'left':'-335px'},500);
					$('.box_four .banner_box').stop().animate({'right':'-542px'},500);	
					$(".zhuan").removeClass('zhenzhuan');
				}
			};
			var timer01 = null;
			var timeraa = 0;
			var star = 0;
			var myTimer = function(){
				star++;
				if(star > 3){
					star = 0;
				}
				$('.banner_box ol li').eq(star).addClass('now').siblings().removeClass('now');
				timeraa++;
				if(timeraa > 4){
					timeraa = 1;	
					$('.banner_box .banner ul').css({'left': '0px'});					
				}
				var myTag = -timeraa*523;
				$('.banner_box .banner ul').stop().animate({'left': myTag+'px'},500);	
			}
			timer01 = setInterval(myTimer,2000);
			$('.banner_box .banner ul').append($('.box_four .banner ul li:first').clone(true));
			$('.banner_box .banner').mouseover(function(e){
				clearInterval(timer01);
			}).mouseout(function(){
				clearInterval(timer01);
				timer01 = setInterval(myTimer,2000);
			});
			$('.banner_box ol li').click(function(e){
				var myTag = -$(this).index()*523;
				$(this).addClass('now').siblings().removeClass('now');
				$('.banner_box .banner ul').animate({'left': myTag+'px'},500);
				timer = $(this).index();
				star = $(this).index();	
			});
			//联系我们设置
			function contactHuan(){
				if($key == 4){
					$('.contact').stop().animate({'bottom':'0px'},2000);
				}else{
					$('.contact').stop().animate({'bottom':'-600px'},2000);
				}
				
			}
			$('.contactIn ul li').hover(function(e){
				$(this).stop().animate({'width':'320px'},500).siblings().stop().animate({'width':'120px'},500);
			},function(){
				$('.contactIn ul li').stop().animate({'width':'170px'},500);
			});
})

			
			

			
		