# 기본 이미지로 Python 3.12 사용
FROM python:3.12

# 애플리케이션 파일을 /app 디렉토리에 복사
WORKDIR /app
COPY . .

# 필요한 Python 라이브러리 설치
RUN pip install --no-cache-dir -r requirements.txt

# 80번 포트를 외부에 노출
EXPOSE 80

# Uvicorn을 사용하여 FastAPI 애플리케이션 실행
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
