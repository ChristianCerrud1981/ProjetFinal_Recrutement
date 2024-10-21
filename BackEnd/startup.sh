#!/bin/bash

# Move into the correct directory where the FastAPI app is located
cd ProjetFinal_Recrutement

# Run the FastAPI + Dash app using Uvicorn
uvicorn fastapi_app.main:app --host 127.0.0.1 --port 8001 --workers 1