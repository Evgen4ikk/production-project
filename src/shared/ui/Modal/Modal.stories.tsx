import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quibusdam expedita quod quisquam ad praesentium facere commodi placeat laboriosam voluptas quae quas, culpa neque hic nostrum, laudantium harum soluta. Sequi!',
  isOpen: true
}

export const Dark = Template.bind({})
Dark.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quibusdam expedita quod quisquam ad praesentium facere commodi placeat laboriosam voluptas quae quas, culpa neque hic nostrum, laudantium harum soluta. Sequi!',
  isOpen: true
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
