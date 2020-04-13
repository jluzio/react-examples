import { BlogEntryData } from 'components/learning/props/blog/models'
import faker from 'faker'

class FakerService {
  faker = faker

  generateBlogEntry(): BlogEntryData {
    return {
      author: this.faker.name.findName(),
      datetime: this.faker.date.recent().toISOString(),
      avatar: this.faker.image.avatar(),
      content: this.faker.lorem.lines(3)
    }
  }
}

export default new FakerService()
