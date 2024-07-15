import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './';
import { Card, CardContent } from '../Card';
import { withDarkMode, darkModeParams } from '../_internal/storybook-utils';
import mdx from './Carousel.mdx';

export default {
  title: 'Carousel',
  component: Carousel,
  subcomponents: { CarouselContent, CarouselItem, CarouselPrevious, CarouselNext },
  parameters: {
    docs: {
      page: mdx
    },
    backgrounds: { disable: true },
    layout: 'centered'
  }
};

export const Default = () => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export const DarkMode = () => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
DarkMode.parameters = darkModeParams;
DarkMode.decorators = [withDarkMode];
