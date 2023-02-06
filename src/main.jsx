import React from 'react'
import { QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import ReactDOM from 'react-dom/client'
import App from './App'

// Podemos fazer cache das nossa requisições
const queryClient = new QueryClient({ defaultOptions: { queries: {
  staleTime: 1000  * 60 * 1
}}});

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools/>
  </QueryClientProvider>
)
