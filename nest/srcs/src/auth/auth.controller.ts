import { Controller, Delete, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request, Response } from 'express'
import { AuthenticateGuard, FortyTwoGuard } from "./guard/42.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('login')
    @UseGuards(FortyTwoGuard)
    login() {}

    @Get('redirect')
    @UseGuards(FortyTwoGuard)
    redirect(@Res({ passthrough: true}) res: Response) {
        res.status(200).redirect("http://localhost:8181");
    }

    @Get('test')
    @UseGuards(AuthenticateGuard)
    testfunct() {
        return "NON"
    }

    @Get('logout')
    @UseGuards(AuthenticateGuard)
    logout(@Req() req: Request) {
        req.session.destroy(Error);
    }
}