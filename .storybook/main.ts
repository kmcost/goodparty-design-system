import type { StorybookConfig } from '@storybook/nextjs-vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string>),
      '@styleguide': path.resolve(__dirname, '../src'),
    }
    config.plugins = [...(config.plugins || []), tailwindcss()]
    return config
  },
}

export default config
