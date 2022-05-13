print("\t멋사 커피 자판기")

# 1. 메뉴 선택
# 메뉴의 이름이나 가격은 변경가능!
print("\t  - 메  뉴 -")
print("\t1 : 아메리카노 1,800원")
print("\t2 : 카페라떼 2,700원")
print("\t3 : 핫초코 2,300원")
print("\n========================================")

menu={'아메리카노':1800,
      '카페라떼':2700,
      '핫초코':2300}

print(menu.items[0])

# menu={1:1800,
#       2:2700,
#       3:2300}

select_menu=0
user_money=0
whip=''
hot_ice=''
how_many=0

user_price=0
user_money=0

select_menu=int(input("커피 종류를 선택하세요. 번호 입력 >>>"))
whip=input("휘핑크림 추가해드릴까요? (Y/N) >>>")
hot_ice=input("hot/ice를 선택하세요. (hot/ice) >>>")
how_many=int(input("몇 잔 드릴까요? >>>"))

print(select_menu, whip,hot_ice,how_many)

user_price=(menu.get(select_menu))*how_many
print(user_price)

user_money=int(input("총 금액은 %d원입니다. 돈을 투입해주세요 >>>" %user_price))



# 메뉴 아스키 아트 제공
# 아스키아트가 깨진다면 수정하거나 이모티콘을 사용하셔도 좋습니다!
# 모락모락 뜨거운 김 아스키아트
'''
         S    S 
      S    S    S
'''
#휘핑크림 아스키아트
'''
           @@@
        @@@   @@
     @@@@      @@ 
    @            @  
'''
# 아메리카노 아스키아트
'''
    **************  
    **         ** ****
      **Coffee**  *** 
        ****** 
'''
# 카페라떼 아스키아트
'''
    **************  
    ***        *** 
    ****Coffee****  
      ****  ****
        ******  
'''
#핫초코 아스키아트
'''
    **************
  ***     *  *   *
  * *      **    * 
  * **   Choco  ** 
  ** **        ** 
      **********
'''

