import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditcategoryComponent } from './components/editcategory/editcategory.component';
import { EditpostComponent } from './components/editpost/editpost.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { RegisterComponent } from './components/register/register.component';
import { RoleupdateComponent } from './components/roleupdate/roleupdate.component';
import { RootComponent } from './components/root/root.component';
import { RootdashComponent } from './components/rootdash/rootdash.component';
import { AuthGuard } from './guards/auth.guard';
import { HasRoleGuard } from './guards/has-role.guard';
import { RootGuard } from './guards/root.guard';

const routes: Routes = [{path:'',redirectTo: 'home', pathMatch: 'full' },
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
{path:'createpost',component:CreatePostComponent,canActivate:[AuthGuard]},
{path:'addcategory',component:AddCategoryComponent,canActivate:[AuthGuard,HasRoleGuard]},
{path:'contactus',component:ContactusComponent,canActivate:[AuthGuard]},
{path:'posts',component:PostsComponent,canActivate:[AuthGuard]},
{path:'post',component:PostComponent,canActivate:[AuthGuard]},
{path:'categories',component:CategoriesComponent,canActivate:[AuthGuard]},
{path:'category',component:CategoryComponent,canActivate:[AuthGuard]},
{path:'home',component:HomeComponent},
{path:'editcategory',component:EditcategoryComponent,canActivate:[AuthGuard,HasRoleGuard]},
{path:'editpost',component:EditpostComponent,canActivate:[AuthGuard,HasRoleGuard]},
{path:'roleupdate',component:RoleupdateComponent,canActivate:[AuthGuard,RootGuard]},
{path:'root',component:RootdashComponent,canActivate:[AuthGuard,RootGuard],
children:
[{path:'rootprofile',component:RootComponent}]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
