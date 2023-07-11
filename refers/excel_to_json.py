import pandas as pd
import json

# 엑셀 파일 읽기
xlsx = pd.read_csv('refers/Useful Infor - IT Tech List.csv')
# JSON 파일로 저장하기
xlsx.to_json('refers/Useful Infor - IT Tech List.json', orient='table')
