const RadixDocs = ({ componentName }: { componentName: string }) => {
  return (
    <>
      <p>
        <span>This component is built on top of</span>
        <a href="https://www.radix-ui.com/" target="_blank" className="inline">
          <span> radix </span>
        </a>
        <span>primitives.</span>
      </p>

      <span>
        The links below will help you gain a better understanding of the underlying components and how to use them:
      </span>

      <br />
      <br />

      <div className="mb-4 flex items-center">
        <a href={`https://www.radix-ui.com/primitives/docs/components/${componentName}`} target="_blank">
          <span>Documentation</span>
        </a>

        <span className="px-2">•</span>

        <a href={`https://www.radix-ui.com/primitives/docs/components/${componentName}#api-reference`} target="_blank">
          <span>API Reference</span>
        </a>
      </div>

      <br />
    </>
  );
};

export { RadixDocs };
