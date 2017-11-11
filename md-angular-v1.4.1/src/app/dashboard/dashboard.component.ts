import { Component, OnInit,HostListener } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Router} from '@angular/router';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public datos:any;
  public nUser:any;
  public pedido0:any;
  public pedido1:any;
  public pedido2:any;
  public pedido:any;
  public dinero:any;
  public ultimaSus:any;
  public ultimoPed:any;
  public loading=false;
  prueba = localStorage.getItem("manappger");
  constructor(private http: HttpClient,private router: Router) { }

  ESCAPE_KEYCODE = 27;
    @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
      //console.log(event);
      if (event.keyCode === this.ESCAPE_KEYCODE) {
          console.log(event.keyCode);
          this.loading=false;
      }
    }

  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
    this.loading=true;
    let OneSignal = window['OneSignal'] || [];
    OneSignal.push(function() {
      OneSignal.getUserId(function(userId) {
        console.log("OneSignal User ID:", userId);
      });
    });

    

    this.http.get('http://apimanappger.internow.com.mx/api/public/dash?token='+localStorage.getItem('manappger_token'))
           .toPromise()
           .then(
           data => { // Success
             console.log(data);
              this.datos=data;
              this.loading=false;
              this.nUser=this.datos.nUser;
              this.pedido0=this.datos.pedido0;
              this.pedido1=this.datos.pedido1;
              this.pedido2=this.datos.pedido2;
              this.pedido=this.datos.pedido0+this.datos.pedido1+this.datos.pedido2;
              this.dinero=this.datos.dinero;
              this.ultimaSus=this.datos.ultimaSus;
              this.ultimoPed=this.datos.ultimoPed;

               /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

              var dataEmailsSubscriptionChart = {
                labels: ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                series: [
                  this.datos.suscritoMes
                ]
              };
              var optionsEmailsSubscriptionChart = {
                  axisX: {
                      showGrid: false
                  },
                  low: 0,
                  high: this.datos.iNumeroMayor,
                  chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
              };
              var responsiveOptions: any[] = [
                ['screen and (max-width: 640px)', {
                  seriesBarDistance: 5,
                  axisX: {
                    labelInterpolationFnc: function (value) {
                      return value[0];
                    }
                  }
                }]
              ];
              var emailsSubscriptionChart = new Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

              //start animation for the Emails Subscription Chart
              this.startAnimationForBarChart(emailsSubscriptionChart);
              /* ----------==========   FIN  Emails Subscription Chart initialization    ==========---------- */
              /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

              const dataDailySalesChart: any = {
                  labels: this.datos.ultimosDias,
                  series: [
                      this.datos.nUltimosDias
                  ]
              };

             const optionsDailySalesChart: any = {
                  lineSmooth: Chartist.Interpolation.cardinal({
                      tension: 0
                  }),
                  low: 0,
                  high: this.datos.nMayorUltimosDias, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                  chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
              }

              var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

              this.startAnimationForLineChart(dailySalesChart);
              /* ----------==========   FIN  Daily Sales Chart initialization For Documentation    ==========---------- */
              /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

              const dataCompletedTasksChart: any = {
                  labels: this.datos.horaServiciosFinalizados,
                  series: [
                      this.datos.serviciosFinalizados
                  ]
              };

             const optionsCompletedTasksChart: any = {
                  lineSmooth: Chartist.Interpolation.cardinal({
                      tension: 0
                  }),
                  low: 0,
                  high: this.datos.nServiciosFinalizados, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                  chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
              }

              var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

              // start animation for the Completed Tasks Chart - Line Chart
              this.startAnimationForLineChart(completedTasksChart);
              /* ----------==========   FIN  Completed Tasks Chart initialization    ==========---------- */
             console.log(data);  
           },
           msg => { // Error
             console.log(msg.error);
             console.log(msg);
             if (msg.status==401) {
               this.router.navigate(['/login']);
             }
             alert(JSON.stringify(msg.error));
           });
           



      



      
  }

}
