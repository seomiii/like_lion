print("\t멋사 커피 자판기")

# 1. 메뉴 선택
# 메뉴의 이름이나 가격은 변경가능!
print("\t  - 메  뉴 -")
print("\t1 : 아메리카노 1,800원")
print("\t2 : 카페라떼 2,700원")
print("\t3 : 핫초코 2,300원")
print("\n========================================")


#튜플에 대한 리스트
menu=[('아메리카노',1800),('카페라떼',2700),('핫초코',2300)]
#print(menu[0][1])

user_money=0
user_money=0

select_menu=int(input("커피 종류를 선택하세요.. 번호 입력 >>>"))
whip=input("휘핑크림 추가해드릴까요? (Y/N) >>>")
hot_ice=input("hot/ice를 선택하세요. (hot/ice) >>>")
how_many=int(input("몇 잔 드릴까요? >>>"))
#print(select_menu, whip,hot_ice,how_many)

# 총 가격: user_price
user_price=(menu[select_menu-1][1])*how_many
print(user_price)

# 손님이 낸 금액 : user_money
user_money=int(input("총 금액은 %d원입니다. 돈을 투입해주세요 >>>" %user_price))
left_money=user_price-user_money

for i in range(3):
  # 손님이 낸 금액이 결제금액보다 클 때
  if (left_money<=0):
    print("%d원을 받았습니다. 거스름돈은 %d원 입니다." %(user_money,abs(left_money)))
    break
  
  # 돈이 부족할 때
  else:
    user_money=int(input("%d원이 부족합니다. 돈을 추가로 투입해주세요 >>> "%left_money))
    left_money=left_money-user_money

if (left_money>0):
  print("금액이 부족합니다. 주문이 취소되었습니다.")

else:
  print("주문하신 %s 나왔습니다" %menu[select_menu-1][0])

  for i in range (how_many):
    if(hot_ice=='hot'):
      print('''
          S    S 
        S    S    S
  ''')

    if (whip.upper()=='Y'):
      print('''
            @@@
          @@@   @@
      @@@@      @@ 
      @            @  
  ''')

    if(select_menu == 1):
      print('''
      **************  
      **         ** ****
        **Coffee**  *** 
          ****** 
  ''')

    elif(select_menu==2):
      print('''
      **************  
      ***        *** 
      ****Coffee****  
        ****  ****
          ******  
  ''')

    elif(select_menu==3):
      print('''
      **************
    ***     *  *   *
    * *      **    * 
    * **   Choco  ** 
    ** **        ** 
        **********
  ''')
