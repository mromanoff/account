!function(){"use strict";var t={Models:{},Collections:{},Views:{}};t.Models.Account=Backbone.Model.extend({defaults:{accountName:null,allocationValue:null,allocationPercentage:null}}),t.Collections.Accounts=Backbone.Collection.extend({model:t.Models.Account,url:"/mocks/accounts.json",initialize:function(){console.log("collection",this.url)},parse:function(t){return t}}),t.Views.Account=Backbone.View.extend({tagName:"li",className:"account",initialize:function(t){this.layout=t.layout},templateList:_.template($("#account-item-list").html()),templateGrid:_.template($("#account-item-grid").html()),render:function(){return this.$el.html(_.isEqual(this.layout,"list")?this.templateList(this.model.toJSON()):this.templateGrid(this.model.toJSON())),this}}),t.Views.Accounts=Backbone.View.extend({el:".accounts",events:{"click button":"toggleView"},initialize:function(){this.collection=new t.Collections.Accounts,this.collection.on("reset",this.render,this),this.collection.fetch({reset:!0})},template:_.template($("#account-list").html()),toggleView:function(t){t.preventDefault(),this.layout=$(t.currentTarget).data("view"),this.$el.toggleClass("list-view grid-view"),this.$el.find("ul").empty(),this.render()},render:function(){var e=[];return this.$el.html(this.template()),this.collection.each(function(i){var l=new t.Views.Account({model:i,layout:this.layout});e.push(l.render().el)},this),this.$el.find("ul").append(e),this}});new t.Views.Accounts}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwiTW9kZWxzIiwiQ29sbGVjdGlvbnMiLCJWaWV3cyIsIkFjY291bnQiLCJCYWNrYm9uZSIsIk1vZGVsIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJhY2NvdW50TmFtZSIsImFsbG9jYXRpb25WYWx1ZSIsImFsbG9jYXRpb25QZXJjZW50YWdlIiwiQWNjb3VudHMiLCJDb2xsZWN0aW9uIiwibW9kZWwiLCJ1cmwiLCJpbml0aWFsaXplIiwiY29uc29sZSIsImxvZyIsInRoaXMiLCJwYXJzZSIsInJlc3BvbnNlIiwiVmlldyIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJvcHRpb25zIiwibGF5b3V0IiwidGVtcGxhdGVMaXN0IiwiXyIsInRlbXBsYXRlIiwiJCIsImh0bWwiLCJ0ZW1wbGF0ZUdyaWQiLCJyZW5kZXIiLCIkZWwiLCJpc0VxdWFsIiwidG9KU09OIiwiZWwiLCJldmVudHMiLCJjbGljayBidXR0b24iLCJjb2xsZWN0aW9uIiwib24iLCJmZXRjaCIsInJlc2V0IiwidG9nZ2xlVmlldyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhIiwidG9nZ2xlQ2xhc3MiLCJmaW5kIiwiZW1wdHkiLCJlYWNoIiwiYWNjb3VudCIsInB1c2giLCJhcHBlbmQiXSwibWFwcGluZ3MiOiJDQUFBLFdBQ0ksWUFFQSxJQUFJQSxJQUNBQyxVQUNBQyxlQUNBQyxTQUdKSCxHQUFJQyxPQUFPRyxRQUFVQyxTQUFTQyxNQUFNQyxRQUNoQ0MsVUFDSUMsWUFBYSxLQUNiQyxnQkFBaUIsS0FDakJDLHFCQUFzQixRQUk5QlgsRUFBSUUsWUFBWVUsU0FBV1AsU0FBU1EsV0FBV04sUUFDM0NPLE1BQU9kLEVBQUlDLE9BQU9HLFFBQ2xCVyxJQUFLLHVCQUVMQyxXQUFZLFdBQ1JDLFFBQVFDLElBQUksYUFBY0MsS0FBS0osTUFHbkNLLE1BQU8sU0FBVUMsR0FFYixNQUFPQSxNQUlmckIsRUFBSUcsTUFBTUMsUUFBVUMsU0FBU2lCLEtBQUtmLFFBQzlCZ0IsUUFBUyxLQUNUQyxVQUFXLFVBQ1hSLFdBQVksU0FBVVMsR0FDbEJOLEtBQUtPLE9BQVNELEVBQVFDLFFBRzFCQyxhQUFjQyxFQUFFQyxTQUFTQyxFQUFFLHNCQUFzQkMsUUFDakRDLGFBQWNKLEVBQUVDLFNBQVNDLEVBQUUsc0JBQXNCQyxRQUNqREUsT0FBUSxXQU1KLE1BSklkLE1BQUtlLElBQUlILEtBRFRILEVBQUVPLFFBQVFoQixLQUFLTyxPQUFRLFFBQ1RQLEtBQUtRLGFBQWFSLEtBQUtMLE1BQU1zQixVQUU3QmpCLEtBQUthLGFBQWFiLEtBQUtMLE1BQU1zQixXQUV4Q2pCLFFBSWZuQixFQUFJRyxNQUFNUyxTQUFXUCxTQUFTaUIsS0FBS2YsUUFDL0I4QixHQUFJLFlBQ0pDLFFBQ0lDLGVBQWdCLGNBR3BCdkIsV0FBWSxXQUNSRyxLQUFLcUIsV0FBYSxHQUFJeEMsR0FBSUUsWUFBWVUsU0FDdENPLEtBQUtxQixXQUFXQyxHQUFHLFFBQVN0QixLQUFLYyxPQUFRZCxNQUN6Q0EsS0FBS3FCLFdBQVdFLE9BQU9DLE9BQU8sS0FHbENkLFNBQVVELEVBQUVDLFNBQVNDLEVBQUUsaUJBQWlCQyxRQUV4Q2EsV0FBWSxTQUFVQyxHQUNsQkEsRUFBRUMsaUJBQ0YzQixLQUFLTyxPQUFTSSxFQUFFZSxFQUFFRSxlQUFlQyxLQUFLLFFBQ3RDN0IsS0FBS2UsSUFBSWUsWUFBWSx1QkFDckI5QixLQUFLZSxJQUFJZ0IsS0FBSyxNQUFNQyxRQUNwQmhDLEtBQUtjLFVBR1RBLE9BQVEsV0FDSixHQUFJRixLQVdKLE9BVkFaLE1BQUtlLElBQUlILEtBQUtaLEtBQUtVLFlBQ25CVixLQUFLcUIsV0FBV1ksS0FBSyxTQUFVdEMsR0FDM0IsR0FBSXVDLEdBQVUsR0FBSXJELEdBQUlHLE1BQU1DLFNBQ3hCVSxNQUFPQSxFQUNQWSxPQUFRUCxLQUFLTyxRQUVqQkssR0FBS3VCLEtBQUtELEVBQVFwQixTQUFTSSxLQUM1QmxCLE1BRUhBLEtBQUtlLElBQUlnQixLQUFLLE1BQU1LLE9BQU94QixHQUNwQlosT0FLTCxJQUFJbkIsR0FBSUcsTUFBTVMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgQXBwID0ge1xuICAgICAgICBNb2RlbHM6IHt9LFxuICAgICAgICBDb2xsZWN0aW9uczoge30sXG4gICAgICAgIFZpZXdzOiB7fVxuICAgIH07XG5cbiAgICBBcHAuTW9kZWxzLkFjY291bnQgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgICAgYWNjb3VudE5hbWU6IG51bGwsXG4gICAgICAgICAgICBhbGxvY2F0aW9uVmFsdWU6IG51bGwsXG4gICAgICAgICAgICBhbGxvY2F0aW9uUGVyY2VudGFnZTogbnVsbFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBBcHAuQ29sbGVjdGlvbnMuQWNjb3VudHMgPSBCYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XG4gICAgICAgIG1vZGVsOiBBcHAuTW9kZWxzLkFjY291bnQsXG4gICAgICAgIHVybDogJy9tb2Nrcy9hY2NvdW50cy5qc29uJyxcblxuICAgICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29sbGVjdGlvbicsIHRoaXMudXJsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL3JldHVybiByZXNwb25zZS5hbGxBY2NvdW50cy5zdWJBY2NvdW50cztcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgQXBwLlZpZXdzLkFjY291bnQgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgICAgIHRhZ05hbWU6ICdsaScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2FjY291bnQnLFxuICAgICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5sYXlvdXQgPSBvcHRpb25zLmxheW91dDtcbiAgICAgICAgfSxcblxuICAgICAgICB0ZW1wbGF0ZUxpc3Q6IF8udGVtcGxhdGUoJCgnI2FjY291bnQtaXRlbS1saXN0JykuaHRtbCgpKSxcbiAgICAgICAgdGVtcGxhdGVHcmlkOiBfLnRlbXBsYXRlKCQoJyNhY2NvdW50LWl0ZW0tZ3JpZCcpLmh0bWwoKSksXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF8uaXNFcXVhbCh0aGlzLmxheW91dCwgJ2xpc3QnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZUxpc3QodGhpcy5tb2RlbC50b0pTT04oKSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGVHcmlkKHRoaXMubW9kZWwudG9KU09OKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBBcHAuVmlld3MuQWNjb3VudHMgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgICAgIGVsOiAnLmFjY291bnRzJyxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAnY2xpY2sgYnV0dG9uJzogJ3RvZ2dsZVZpZXcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gbmV3IEFwcC5Db2xsZWN0aW9ucy5BY2NvdW50cygpO1xuICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uLm9uKCdyZXNldCcsIHRoaXMucmVuZGVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbi5mZXRjaCh7cmVzZXQ6IHRydWV9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB0ZW1wbGF0ZTogXy50ZW1wbGF0ZSgkKCcjYWNjb3VudC1saXN0JykuaHRtbCgpKSxcblxuICAgICAgICB0b2dnbGVWaWV3OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5sYXlvdXQgPSAkKGUuY3VycmVudFRhcmdldCkuZGF0YSgndmlldycpO1xuICAgICAgICAgICAgdGhpcy4kZWwudG9nZ2xlQ2xhc3MoJ2xpc3QtdmlldyBncmlkLXZpZXcnKTtcbiAgICAgICAgICAgIHRoaXMuJGVsLmZpbmQoJ3VsJykuZW1wdHkoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaHRtbCA9IFtdO1xuICAgICAgICAgICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uLmVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjY291bnQgPSBuZXcgQXBwLlZpZXdzLkFjY291bnQoe1xuICAgICAgICAgICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDogdGhpcy5sYXlvdXRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBodG1sLnB1c2goYWNjb3VudC5yZW5kZXIoKS5lbCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy4kZWwuZmluZCgndWwnKS5hcHBlbmQoaHRtbCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8ga2ljayB0aGUgYXBwXG4gICAgdmFyIGFwcCA9IG5ldyBBcHAuVmlld3MuQWNjb3VudHMoKTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=