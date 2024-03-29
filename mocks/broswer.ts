// src/mocks/server.js
import { setupWorker } from 'msw'
import handlers from './handlers'

// This configures a request mocking server with the given request handlers.
export const broswer = setupWorker(...handlers)
