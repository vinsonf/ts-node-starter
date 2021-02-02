import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeUsersTable'
})
export class PipeUsersTablePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? reshape(value) : [];

    function reshape(value: any) {

      console.log('value', value)
      return value.map((user: any) => {
        return {
          name: `${user.profile?.firstName} ${user.profile?.lastName}`,
          email: user.email,
          roleType: user.roleType?.nicename
        }
      })

    }
  }

}
