import controller from "./controller";
import { AdapterFactory } from "../types/index";

export default (
  app: any,
  gatewayFactory: AdapterFactory,
  logger: any
) => {
  const defaultHandler = async (req: any, res: any, action: string) => {
    return controller(req, res, action, gatewayFactory, logger);
  };
  app.use("/authorize", (req: any, res: any) =>
    defaultHandler(req, res, "authorize")
  );
  app.use("/authorizeWithToken", (req: any, res: any) =>
    defaultHandler(req, res, "authorizeWithToken")
  );
  app.use("/credit", (req: any, res: any) =>
    defaultHandler(req, res, "credit")
  );
  app.use("/void", (req: any, res: any) => defaultHandler(req, res, "void"));
  app.use("/capture", (req: any, res: any) =>
    defaultHandler(req, res, "capture")
  );
  app.use("/authorizeAndCapture", (req: any, res: any) =>
    defaultHandler(req, res, "authorizeAndCapture")
  );
  app.use("/authorizeAndCaptureWithToken", (req: any, res: any) =>
    defaultHandler(req, res, "authorizeAndCaptureWithToken")
  );
  app.use("/createGiftCard", (req: any, res: any) =>
    defaultHandler(req, res, "createGiftCard")
  );
  app.use("/getBalance", (req: any, res: any) =>
    defaultHandler(req, res, "getBalance")
  );
};
