import fastapi
import uvicorn
from fastapi import FastAPI, HTTPException, Query, status
from model import Answer

app = FastAPI()
@app.get("/process/", status_code=status.HTTP_200_OK)
async def process_text(query: str = Query(default="Hello, how can I help you?", min_length=3)):
    try:
        answer = Answer(query)
        return {"answer": answer}
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
    