import express, { Application, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import { MongoDb } from './configs/db.connection'
import swaggerUi from 'swagger-ui-express'
import { Server } from 'http'
import { MainRouter } from './routes/index.routes'
import dotEnv from 'dotenv'
import { SWAGGER_UI_OPTIONS } from './configs/swagger.config'
import { RegisterRoutes } from './routes/tsoaRoutes/routes'

let server: Server | undefined = undefined

/**
 * This function returns the express application variable
 * @returns app
 */
async function initApplication(): Promise<Application> {
  let app = express()

  return app
}

function addMiddlewears(app: Application) {
  // Configuring Environment Variables
  dotEnv.config()

  // For Static Files
  app.use(express.static('public'))

  // For Parsing Request Data
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  // For Api Logging
  app.use(morgan('tiny'))

  // Swagger Middlewear
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, SWAGGER_UI_OPTIONS)
  )

  // Custom Routes
  // app?.use(MainRouter)

  // Tsoa Routes
  RegisterRoutes(app)

  // To Handle Invalid Request
  app.all('*', function (req, res, next) {
    // Send The Control To Error Handler
    next(new Error())
  })

  // Error Hanlder
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.locals.message = err.message
    const status = err.statusCode || 500
    console.log(status)
    res.locals.status = status
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.status(status)
    return res.json({
      error: {
        message: err.message,
      },
    })
  })
}

async function start() {
  const app = await initApplication()

  // Add Middlewears
  addMiddlewears(app)

  const PORT = process.env.PORT || 3000
  const HOST = process.env.HOST || 'localhost'

  // Listen For The Server
  server = app?.listen(PORT, () => {
    console.log(`Server Is Live On http://${HOST}:${PORT}/api-docs`)
  })
}

// Starting The Server
start()
