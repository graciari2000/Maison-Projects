import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { TransactionComponent } from '../components/transaction/transaction.component';
import { CryptoPriceComponent } from '../components/crypto-price/crypto-price.component';
import { CryptoTrendsComponent } from '../components/crypto-trends/crypto-trends.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'portfolio', component: PortfolioComponent, canActivate: [AuthGuard] },
  { path: 'transactions', component: TransactionComponent, canActivate: [AuthGuard] },
  { path: 'crypto-price', component: CryptoPriceComponent, canActivate: [AuthGuard] },
  { path: 'crypto-trends', component: CryptoTrendsComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
