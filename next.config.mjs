const pages = process.env.GITHUB_ACTIONS === "true";
export default { output: "export", trailingSlash: true, images: { unoptimized: true }, basePath: pages ? "/EvolveIR-2027" : "", assetPrefix: pages ? "/EvolveIR-2027/" : "", env: { NEXT_PUBLIC_BASE_PATH: pages ? "/EvolveIR-2027" : "" } };
