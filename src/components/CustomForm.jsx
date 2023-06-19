import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function CustomForm() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [serverAddress, setServerAddress] = useState('');
    const [serverPath, setServerPath] = useState('');
    const [port, setPort] = useState('');
    const [accountType, setAccountType] = useState('Advanced');
    const [useSSL, setUseSSL] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation and logging of the controls here
        console.log('Submitted Form:', {
            userName,
            password,
            serverAddress,
            serverPath,
            port,
            accountType,
            useSSL
        });

        // Clear the form state after submission
        setUserName('');
        setPassword('');
        setServerAddress('');
        setServerPath('');
        setPort('');
        setAccountType('Advanced');
        setUseSSL(false);
    };

    return (
        <Card className="p-4" >
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formAccountType" className="d-flex mb-3">
                    <Form.Label style={{ whiteSpace: 'nowrap' }}>Account Type: </Form.Label>
                    <Form.Control
                        className="ml-5"
                        as="select"
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                    >
                        <option value="Advanced">Advanced</option>
                        <option value="Manual">Manual</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formUserName" className="d-flex mb-3" >
                    <Form.Label style={{ whiteSpace: 'nowrap' }}>User Name: </Form.Label>
                    <Form.Control
                        style={{ width: '600px' }}
                        type="text"
                        placeholder="name@example.com"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPassword" className="d-flex mb-3">
                    <Form.Label className="mr-3" style={{ whiteSpace: 'nowrap' }}>Password: </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Required"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formServerAddress" className="d-flex mb-3">
                    <Form.Label className="mr-3" style={{ whiteSpace: 'nowrap' }}>Server Address: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="example.com"
                        value={serverAddress}
                        onChange={(e) => setServerAddress(e.target.value)}
                        required
                    />
                </Form.Group>

                {accountType && accountType === 'Advanced' &&

                    <>
                        <Form.Group controlId="formServerPath" className="d-flex mb-3">
                            <Form.Label className="mr-5" style={{ whiteSpace: 'nowrap' }}>Server Path: </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="calendars/user"
                                value={serverPath}
                                onChange={(e) => setServerPath(e.target.value)}
                                required
                                className='ml-4'
                            />
                        </Form.Group>

                        <Form.Group controlId="formPort" className="d-flex mb-3 align-items-center">
                            <Form.Group className="d-flex">
                                <Form.Label className="mr-3" style={{ whiteSpace: 'nowrap' }}>Port: </Form.Label>
                                <Form.Control
                                    type="number"
                                    value={port}
                                    onChange={(e) => setPort(e.target.value)}
                                    required
                                    style={{ width: '50px' }}
                                />
                            </Form.Group>

                            <Form.Check
                                style={{ marginLeft: '20px' }}
                                type="checkbox"
                                label="Use SSL"
                                checked={useSSL}
                                onChange={(e) => setUseSSL(e.target.checked)}
                            />
                        </Form.Group>
                    </>
                }
                <Button type="submit" style={{ backgroundColor: 'orange', borderColor: '#f09789' }}>Submit</Button>
            </Form>
        </Card>
    );
}

export default CustomForm;
