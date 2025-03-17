import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrInput, IgrInputModule, IgrList, IgrListItem, IgrListModule, IgrRadio, IgrRadioGroup, IgrRadioGroupModule, IgrRadioModule, IgrRipple, IgrRippleModule, IgrSnackbar, IgrSnackbarModule } from 'igniteui-react';
import { useRef, useState } from 'react';
import { formDataToObject } from '../utils/form-utils';
import { postCustomerDto } from '../services/northwind-swagger';
import styles from './master-view.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrInputModule.register();
IgrListModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();
IgrRippleModule.register();
IgrSnackbarModule.register();

export default function MasterView() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const form = useRef<HTMLFormElement>(null);
  const snackbarsuccess = useRef<IgrSnackbar>(null);
  const snackbarerror = useRef<IgrSnackbar>(null);
  const [value, setValue] = useState<string | undefined>('1');

  async function submitCustomerDto(args: React.FormEvent<HTMLFormElement>) {
    args.preventDefault();
    const value = formDataToObject(args.target as HTMLFormElement);
    await postCustomerDto(value);
  }

  return (
    <>
      <div className={classes("row-layout master-view-container")}>
        <form onSubmit={submitCustomerDto} ref={form} className={classes("column-layout form")}>
          <h6>
            <span>Form in DEV</span>
          </h6>
          <div className={classes("column-layout form_fields")}>
            <IgrInput label="customerId" outlined="true" name="customerId"></IgrInput>
            <IgrInput label="companyName" required outlined="true" name="companyName"></IgrInput>
            <IgrInput label="contactName" outlined="true" name="contactName"></IgrInput>
            <IgrInput label="contactTitle" outlined="true" name="contactTitle"></IgrInput>
            <IgrInput label="address.street" outlined="true" name="address.street"></IgrInput>
            <IgrInput label="address.city" outlined="true" name="address.city"></IgrInput>
            <IgrInput label="address.region" outlined="true" name="address.region"></IgrInput>
            <IgrInput label="address.postalCode" outlined="true" name="address.postalCode"></IgrInput>
            <IgrInput label="address.country" required outlined="true" name="address.country"></IgrInput>
            <IgrInput label="address.phone" outlined="true" name="address.phone"></IgrInput>
          </div>
          <div className={classes("row-layout actions")}>
            <IgrButton variant="outlined" type="reset" className={classes("button")}>
              <span key={uuid()}>Reset</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton type="submit" className={classes("button")}>
              <span key={uuid()}>Add</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
          <IgrSnackbar actionText="OK" action={() => snackbarsuccess?.current?.toggle()} ref={snackbarsuccess}>
            <span key={uuid()}>Your new submission was saved successfully!</span>
          </IgrSnackbar>
          <IgrSnackbar actionText="OK" action={() => snackbarerror?.current?.toggle()} ref={snackbarerror}>
            <span key={uuid()}>Uh-oh! Something went wrong.</span>
          </IgrSnackbar>
        </form>
        <div className={classes("column-layout group")}>
          <IgrButton type="button" className={classes("button_1")}>
            <span key={uuid()}>Button</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrList className={classes("list")}>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>person</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Title goes here</div>
              <div slot="subtitle" key={uuid()}>Subtitle...</div>
              <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>star</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>person</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Title goes here</div>
              <div slot="subtitle" key={uuid()}>Subtitle...</div>
              <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>star</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>person</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Title goes here</div>
              <div slot="subtitle" key={uuid()}>Subtitle...</div>
              <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>star</span>
              </span>
            </IgrListItem>
          </IgrList>
          <IgrRadioGroup value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("radio-group")}>
            <IgrRadio value="1" key="6c1ff578-6a58-4fe7-bbbd-5319c5e0523d">
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="2" key="44d7a8be-508d-4407-bbfa-6ab0c27a83c3">
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="3" key="3a4132c9-8944-4be3-a65b-26d88fd945c6">
              <span key={uuid()}>Label</span>
            </IgrRadio>
          </IgrRadioGroup>
        </div>
      </div>
    </>
  );
}
