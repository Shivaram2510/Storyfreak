import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../client/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  viteFinal: async (config) => {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');
    
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': '/client/src',
          '@/components': '/client/src/components',
          '@/lib': '/client/src/lib',
          '@/types': '/client/src/types',
          '@/data': '/client/src/data',
          '@/utils': '/client/src/utils',
          '@/contexts': '/client/src/contexts',
        },
      },
    });
  },
};

export default config;