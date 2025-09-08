import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { PayBill } from "./pay-bill/pay-bill";
import { Dashboard } from './dashboard/dashboard';
import { GenerateBill } from './generate-bill/generate-bill';
import { ViewBill } from './view-bill/view-bill';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, PayBill, Dashboard, GenerateBill, ViewBill],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'bill-management-system';
}
