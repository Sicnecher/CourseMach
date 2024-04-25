import { Routes, RouterModule } from '@angular/router';
import { LogUserComponent } from './components/log-user/log-user.component';
import { mainAuthGuard } from './services/auth/guard/main/main.auth.guard';
import { ProffesionalInfoComponent } from './components/log-teacher/child-components/proffesional-info/proffesional-info.component';
import { LogTeacherComponent } from './components/log-teacher/log-teacher.component';
import { FinanceInfoComponent } from './components/log-teacher/child-components/finance-info/finance-info.component';
import { CreditDisplayerComponent } from './components/global-child-components/credit-displayer/credit-displayer.component';
import { AddCreditComponent } from './components/global-child-components/add-credit/add-credit.component';
import { UnauthorizedAccessComponent } from './components/errors/unauthorized-access/unauthorized-access.component';
import { errorAuthGuard } from './services/auth/guard/errors/error.auth.guard';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { InternalErrorComponent } from './components/errors/internal-error/internal-error.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        canActivate: [mainAuthGuard],
        component: AppComponent
    },
    {
        path: 'error',
        canActivate: [errorAuthGuard],
        children:[
            {
                path: '401',
                component: UnauthorizedAccessComponent
            },
            {
                path: '404',
                component: NotFoundComponent
            },
            {
                path: '500',
                component: InternalErrorComponent
            }
        ]
    },
    {
        path: 'sign',
        component: LogUserComponent,
        canActivate: [mainAuthGuard]
    },
    {
        path: '',
        component: LogTeacherComponent,
        canActivate: [mainAuthGuard]
    },
    {
        path: 'log-teacher',
        component: LogTeacherComponent,
        canActivate: [mainAuthGuard]
    },
    {
        path: 'pro',
        component: ProffesionalInfoComponent,
        canActivate: [mainAuthGuard]
    },
    {
        path: 'm',
        component: FinanceInfoComponent,
        canActivate: [mainAuthGuard]
    },
    {
        path:'f',
        component: CreditDisplayerComponent,
        canActivate: [mainAuthGuard]
    },
    {
        path:'d',
        component: AddCreditComponent,
        canActivate: [mainAuthGuard]
    }
];
