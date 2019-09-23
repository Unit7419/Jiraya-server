import { Post, Get, JsonController } from 'routing-controllers'

@JsonController()
export class APIController {
  constructor() {}

  @Get('/test')
  test() {
    return '米奇妙妙屋'
  }

  @Get('/banner')
  banner() {
    return require('./../db/banner.json')
  }

  @Post('/recommend')
  recommend() {
    return require('./../db/recommend.json')
  }
}
