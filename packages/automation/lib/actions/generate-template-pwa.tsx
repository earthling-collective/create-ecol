import shell from "shelljs";

export async function generateTemplatePwa(options?: GenerateTemplateOptions) {
  //clear existing template
  shell.rm("-rf", `./template-pwa`);

  //run create cmd
  shell.exec(
    `yarn create next-app template-pwa --ts --tailwind --app --src-dir --no-eslint --no-tailwind --import-alias "@/*"`
  );

  console.log(`✅ PWA template generated`);
}
