import { Alert, AlertTitle, AlertDescription } from './';
import { AlertCircle } from 'lucide-react';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import mdx from './Alert.mdx';

const meta = {
  title: 'Alert',
  component: Alert,
  subcomponents: { AlertTitle, AlertDescription },
  parameters: {
    docs: {
      page: mdx
    },
    backgrounds: { disable: true }
  }
};

export default meta;

export const Default = () => {
  return (
    <Alert className="w-full px-10 py-4">
      <AlertTitle>Is it accessible?</AlertTitle>
      <AlertDescription>Yes. It adheres to the WAI-ARIA design pattern.</AlertDescription>
    </Alert>
  );
};

export const DarkMode = () => {
  return (
    <Alert className="w-full px-10 py-4">
      <AlertTitle>Is it accessible?</AlertTitle>
      <AlertDescription>Yes. It adheres to the WAI-ARIA design pattern.</AlertDescription>
    </Alert>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];

export const Destructive = () => {
  return (
    <Alert variant="destructive" className="w-full px-10 py-4">
      <AlertTitle>404: Error not found</AlertTitle>
      <AlertDescription>Text describing the error goes here</AlertDescription>
    </Alert>
  );
};

export const DestructiveDark = () => {
  return (
    <Alert variant="destructive" className="w-full px-10 py-4">
      <AlertTitle>404: Error not found</AlertTitle>
      <AlertDescription>Text describing the error goes here</AlertDescription>
    </Alert>
  );
};
DestructiveDark.storyName = 'Destructive (Dark)';
DestructiveDark.parameters = darkModeParams;
DestructiveDark.decorators = [withDarkMode];

export const WithIcon = () => {
  return (
    <Alert icon={AlertCircle} variant="destructive" className="w-full px-10 py-4">
      <AlertTitle>404: Error not found</AlertTitle>
      <AlertDescription>Text describing the error goes here</AlertDescription>
    </Alert>
  );
};
